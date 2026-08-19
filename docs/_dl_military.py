# -*- coding: utf-8 -*-
import pathlib
import ssl
import urllib.request

out = pathlib.Path(r"D:\并没有什么用的文件\作品集申请\项目四——现代欧洲线上展\assets\military")
out.mkdir(parents=True, exist_ok=True)
ua = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
ctx = ssl.create_default_context()

jobs = [
    (
        "battle_calven.jpg",
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Schlacht_an_der_Calven.jpg/1280px-Schlacht_an_der_Calven.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/Schlacht_an_der_Calven.jpg",
        ],
    ),
    (
        "battle_morat.jpg",
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Schilling_battle_morat.jpg/1280px-Schilling_battle_morat.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/4/4d/Schilling_battle_morat.jpg",
        ],
    ),
    (
        "arquebus.jpg",
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Arquebus%2C_c._1510%2C_Germanisches_Nationalmuseum.jpg/800px-Arquebus%2C_c._1510%2C_Germanisches_Nationalmuseum.jpg",
            "https://openaccess-cdn.clevelandart.org/1916.55/1916.55_web.jpg",
        ],
    ),
    (
        "cannon_dulle.jpg",
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dulle_Griet_Gent.JPG/1280px-Dulle_Griet_Gent.JPG",
            "https://upload.wikimedia.org/wikipedia/commons/2/2c/Dulle_Griet_Gent.JPG",
        ],
    ),
]


def ok(data: bytes) -> bool:
    return len(data) > 20000 and (
        data[:2] == b"\xff\xd8" or data[:8] == b"\x89PNG\r\n\x1a\n"
    )


for name, urls in jobs:
    dest = out / name
    done = False
    for u in urls:
        try:
            req = urllib.request.Request(u, headers=ua)
            with urllib.request.urlopen(req, context=ctx, timeout=45) as r:
                data = r.read()
            if not ok(data):
                print("bad", name, len(data), u[:80])
                continue
            dest.write_bytes(data)
            print("OK", name, len(data))
            done = True
            break
        except Exception as e:
            print("fail", name, type(e).__name__, e)
    if not done:
        print("MISS", name)
