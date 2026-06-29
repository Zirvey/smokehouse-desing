#!/usr/bin/env python3
"""Generate owner-facing PDF preview from project screenshots."""

from __future__ import annotations

from pathlib import Path

from fpdf import FPDF
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
FONTS = DOCS / "fonts"
OUTPUT = DOCS / "Smokehouse-Redesign-Navrh.pdf"
LOGO = ROOT / "public" / "logo.png"

MARGIN = 14
PAGE_W = 297
PAGE_H = 210

COMPARISON_ROWS = [
    ("Mobilní navigace", "Rozbalovací menu WordPress, více úrovní", "Burger menu, sticky header, rychlý přístup k sekcím"),
    ("Mobilní layout", "Dlouhé bloky, horizontální scroll u některých prvků", "Mobile-first grid, vertikální karty, bez přetékání"),
    ("Vizuální styl", "Světlý Elementor template, generický vzhled", "Tmavý lounge styl, zlaté akcenty, prémiový dojem"),
    ("Hero sekce", "Statický banner, málo emocí", "Parallax, žár uhlíků, jasné CTA tlačítka"),
    ("Pobočky", "Karty + mapa odděleně", "Moderní karty + interaktivní mapa všech 3 adres"),
    ("Animace", "Minimální / žádné", "Scroll reveal, hover efekty, plynulé přechody"),
    ("Typografie", "Nekonzistentní velikosti", "Jasná hierarchie Montserrat, čitelné na mobilu"),
    ("Výkon", "Těžší WordPress + pluginy", "Lehký Next.js export, rychlé načítání"),
    ("CTA (akce)", "Rozptýlené po stránce", "Výrazná tlačítka Rezervace / Naše pobočky v hero"),
]

class SmokehousePDF(FPDF):
    def __init__(self) -> None:
        super().__init__(orientation="L", unit="mm", format="A4")
        self.add_font("DejaVu", "", str(FONTS / "DejaVuSans.ttf"))
        self.add_font("DejaVu", "B", str(FONTS / "DejaVuSans-Bold.ttf"))
        self.set_auto_page_break(auto=True, margin=MARGIN)

    def dark_page(self) -> None:
        self.add_page()
        self.set_fill_color(10, 10, 10)
        self.rect(0, 0, PAGE_W, PAGE_H, style="F")

    def light_page(self) -> None:
        self.add_page()
        self.set_fill_color(248, 246, 242)
        self.rect(0, 0, PAGE_W, PAGE_H, style="F")

    def section_title(self, title: str, subtitle: str = "") -> None:
        self.set_text_color(202, 138, 4)
        self.set_font("DejaVu", "B", 20)
        self.cell(0, 10, title, new_x="LMARGIN", new_y="NEXT")
        if subtitle:
            self.set_text_color(80, 80, 80)
            self.set_font("DejaVu", "", 11)
            self.multi_cell(0, 6, subtitle)
        self.ln(4)

    def body_text(self, text: str, color: tuple[int, int, int] = (50, 50, 50)) -> None:
        self.set_text_color(*color)
        self.set_font("DejaVu", "", 11)
        self.multi_cell(0, 6, text)
        self.ln(2)

    def fit_image_in_box(self, path: Path, x: float, y: float, box_w: float, box_h: float) -> tuple[float, float]:
        with Image.open(path) as img:
            px_w, px_h = img.size

        ratio = min(box_w / px_w, box_h / px_h)
        w = px_w * ratio
        h = px_h * ratio
        self.image(str(path), x=x + (box_w - w) / 2, y=y + (box_h - h) / 2, w=w, h=h)
        return w, h

    def fit_image(self, path: Path, y: float | None = None, max_h: float | None = None) -> None:
        top = y if y is not None else self.get_y()
        limit_h = max_h if max_h is not None else PAGE_H - top - MARGIN
        max_w = PAGE_W - 2 * MARGIN
        _, h = self.fit_image_in_box(path, MARGIN, top, max_w, limit_h)
        self.set_y(top + h + 4)


def comparison_page(pdf: SmokehousePDF) -> None:
    pdf.light_page()
    pdf.set_xy(MARGIN, MARGIN)
    pdf.section_title(
        "Srovnání se současným webem",
        "smokehouse.cz → nový design koncept",
    )

    col_w = (PAGE_W - 2 * MARGIN) / 3
    row_h = 11
    headers = ("Oblast", "Současný web", "Nový koncept")
    pdf.set_font("DejaVu", "B", 9)
    pdf.set_fill_color(30, 30, 30)
    pdf.set_text_color(255, 255, 255)
    for header in headers:
        pdf.cell(col_w, row_h, header, border=1, fill=True)
    pdf.ln()

    pdf.set_font("DejaVu", "", 8.5)
    for idx, (area, old, new) in enumerate(COMPARISON_ROWS):
        fill = idx % 2 == 0
        pdf.set_fill_color(245 if fill else 255, 243 if fill else 255, 238 if fill else 255)
        pdf.set_text_color(40, 40, 40)
        pdf.cell(col_w, row_h, area, border=1, fill=fill)
        pdf.set_text_color(100, 50, 30)
        pdf.cell(col_w, row_h, old, border=1, fill=fill)
        pdf.set_text_color(30, 90, 40)
        pdf.cell(col_w, row_h, new, border=1, fill=fill)
        pdf.ln()


def main() -> None:
    pdf = SmokehousePDF()

    pdf.dark_page()
    if LOGO.exists():
        pdf.image(str(LOGO), x=PAGE_W / 2 - 35, y=28, w=70)
    pdf.set_y(95)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("DejaVu", "B", 28)
    pdf.cell(0, 12, "Smokehouse", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("DejaVu", "", 16)
    pdf.set_text_color(212, 168, 83)
    pdf.cell(0, 10, "Návrh nového webu", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(8)
    pdf.set_text_color(180, 180, 180)
    pdf.set_font("DejaVu", "", 12)
    pdf.cell(0, 7, "Design koncept · Neoficiální redesign · Praha", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(14)
    pdf.set_font("DejaVu", "", 10)
    pdf.set_text_color(120, 120, 120)
    pdf.cell(0, 6, "Portfolio projekt · 2026", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.light_page()
    pdf.set_xy(MARGIN, MARGIN)
    pdf.section_title("O konceptu", "Moderní alternativa k současnému webu smokehouse.cz")
    pdf.body_text(
        "Tento návrh zachovává identitu značky Smokehouse — tmavou lounge atmosféru, "
        "zlaté akcenty, originální logo a český obsah — a zároveň přidává plynulé animace, "
        "čistší layout a lepší mobilní zážitek."
    )
    pdf.body_text(
        "Cílem je ukázat, jak může web vypadat moderněji bez ztráty charakteru značky. "
        "Projekt není oficiálním webem Smokehouse."
    )

    comparison_page(pdf)

    sections = [
        ("Hero — úvodní sekce", "Parallax, žár uhlíků, CTA tlačítka", DOCS / "hero.png"),
        ("Pobočky + mapa", "3 karty poboček a interaktivní mapa Prahy", DOCS / "locations.png"),
        ("Menu & Rezervace", "Split CTA bloky", DOCS / "cta.png"),
        ("Věrnostní program", "Originální plakát", DOCS / "loyalty.png"),
        ("Premium zážitek", "Highlight sekce", DOCS / "features.png"),
        ("E-shop & O nás", "Banner + brand story", DOCS / "about.png"),
    ]

    for title, subtitle, image_path in sections:
        if not image_path.exists():
            continue
        pdf.light_page()
        pdf.set_xy(MARGIN, MARGIN)
        pdf.section_title(title, subtitle)
        pdf.fit_image(image_path)

    pdf.dark_page()
    pdf.set_y(45)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("DejaVu", "B", 18)
    pdf.cell(0, 10, "Shrnutí", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)
    pdf.set_font("DejaVu", "", 11)
    pdf.set_text_color(200, 200, 200)
    for line in [
        "✓ Prémiový tmavý design odpovídající atmosféře lounge",
        "✓ Lepší mobilní UX než současný WordPress web",
        "✓ Mapa 3 poboček — stejná funkce jako na smokehouse.cz",
        "✓ Rychlé načítání, moderní technologie (Next.js)",
        "",
        "Live demo: zirvey.github.io/smokehouse-desing",
    ]:
        pdf.cell(0, 7, line, align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(10)
    pdf.set_font("DejaVu", "", 10)
    pdf.set_text_color(120, 120, 120)
    pdf.cell(0, 6, "Design koncept · Není oficiálním webem Smokehouse", align="C", new_x="LMARGIN", new_y="NEXT")

    pdf.output(str(OUTPUT))
    print(f"Created: {OUTPUT} ({OUTPUT.stat().st_size // 1024} KB)")


if __name__ == "__main__":
    main()
