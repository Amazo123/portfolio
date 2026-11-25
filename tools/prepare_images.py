"""Copy and optimise CryNet imagery into the Astro public/ directory.

Sources are the TWO-COT edition repo (fp-two-node) — that is the build the
user is going with, so the site's renders, wiring sheets and dossier all
come from there. Bench photos that only exist in the fp-2 repo (the colour
check photograph) are the same hardware and are pulled from there.

Photos are downscaled to web sizes (max 1600 px on the long edge, JPEG q84).
Device-screen PNGs are copied verbatim — they are 320x240 pixel art and must
stay pixel-exact so `image-rendering: pixelated` can upscale them cleanly.
Wiring sheets are rendered from the two-node SYSTEM_WIRING_DIAGRAMS.pdf.
"""
from __future__ import annotations

import shutil
from pathlib import Path

import pymupdf
from PIL import Image, ImageOps

TWO = Path(r"C:\Users\HP\.t3\projects\fp-two-node")
FP2 = Path(r"C:\Users\HP\.t3\projects\fp-2")
DST = Path(r"C:\Users\HP\.t3\projects\portfolio\public\img")
PUB = Path(r"C:\Users\HP\.t3\projects\portfolio\public")

MAX_EDGE = 1600
JPEG_QUALITY = 84


def prep_photo(src: Path, dst: Path, max_edge: int = MAX_EDGE) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if im.mode not in ("RGB", "L"):
            im = im.convert("RGB")
        im.thumbnail((max_edge, max_edge), Image.LANCZOS)
        save_kwargs = {"optimize": True}
        if dst.suffix.lower() in {".jpg", ".jpeg"}:
            save_kwargs["quality"] = JPEG_QUALITY
            save_kwargs["progressive"] = True
        im.save(dst, **save_kwargs)
    print(f"  {dst.name:<28} {dst.stat().st_size/1024:8.1f} KB  ({Image.open(dst).size})")


def prep_exact(src: Path, dst: Path) -> None:
    dst.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(src, dst)
    with Image.open(dst) as im:
        size = im.size
    print(f"  {dst.name:<28} {dst.stat().st_size/1024:8.1f} KB  ({size}) [exact]")


def prep_pdf_pages(pdf: Path, dst_dir: Path, stem: str, dpi: int = 150) -> None:
    dst_dir.mkdir(parents=True, exist_ok=True)
    doc = pymupdf.open(pdf)
    for i, page in enumerate(doc, start=1):
        pix = page.get_pixmap(dpi=dpi)
        out = dst_dir / f"{stem}-{i}.png"
        pix.save(out)
        print(f"  {out.name:<28} {out.stat().st_size/1024:8.1f} KB  ({pix.width}x{pix.height})")
    doc.close()


def main() -> None:
    out = TWO / "research" / "out"
    fp2_out = FP2 / "research" / "out"

    print("CryNet device screens (two-cot renders, pixel-exact):")
    prep_exact(out / "ui_splash.png", DST / "crynet" / "tft-splash.png")
    prep_exact(out / "ui_dashboard.png", DST / "crynet" / "tft-listening.png")
    prep_exact(out / "ui_dashboard_alert.png", DST / "crynet" / "tft-alert.png")
    prep_exact(out / "ui_dashboard_alert_nophone.png", DST / "crynet" / "tft-alert-nophone.png")
    prep_exact(out / "ui_dashboard_nowifi.png", DST / "crynet" / "tft-nowifi.png")
    prep_exact(out / "two_node_display_mock.png", DST / "crynet" / "panel-mock.png")

    print("CryNet bench photos (web-res):")
    prep_photo(fp2_out / "photo_colour_check_raw.jpg", DST / "crynet" / "photo-colour-check.jpg")
    prep_photo(fp2_out / "ramp_photo_co_rect.png", DST / "crynet" / "colour-check-rectified.jpg")
    prep_photo(out / "photo_panel_before_fix.png", DST / "crynet" / "panel-before.jpg")
    prep_photo(out / "photo_panel_after_fix.png", DST / "crynet" / "panel-after.jpg")

    print("Wiring sheets (rendered from the two-node diagrams PDF):")
    prep_pdf_pages(TWO / "SYSTEM_WIRING_DIAGRAMS.pdf", DST / "wiring", "sheet", dpi=150)

    print("Documents:")
    (PUB / "docs").mkdir(parents=True, exist_ok=True)
    shutil.copy2(TWO / "docs" / "dossier" / "CryNet-TwoNode-Dossier.pdf", PUB / "docs" / "crynet-dossier.pdf")
    shutil.copy2(TWO / "SYSTEM_WIRING.pdf", PUB / "docs" / "crynet-wiring.pdf")
    print(f"  crynet-dossier.pdf         {(PUB / 'docs' / 'crynet-dossier.pdf').stat().st_size/1048576:8.1f} MB")
    print(f"  crynet-wiring.pdf          {(PUB / 'docs' / 'crynet-wiring.pdf').stat().st_size/1024:8.1f} KB")


if __name__ == "__main__":
    main()
