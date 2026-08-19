# -*- coding: utf-8 -*-
import pathlib
import ssl
import urllib.request

out_dir = pathlib.Path(r"D:\并没有什么用的文件\作品集申请\项目四——现代欧洲线上展\assets\economy")
out_dir.mkdir(parents=True, exist_ok=True)
ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
ctx = ssl.create_default_context()

jobs = [
    (
        "fugger.jpg",
        [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Albrecht_D%C3%BCrer_080.jpg/800px-Albrecht_D%C3%BCrer_080.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Jakob_Fugger.jpg/640px-Jakob_Fugger.jpg",
            "https://images.weserv.nl/?url=upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Albrecht_D%C3%BCrer_080.jpg/640px-Albrecht_D%C3%BCrer_080.jpg",
        ],
    ),
    (
        "mining.jpg",
        [
            "https://iiif.wellcomecollection.org/image/L0006609/full/800,/0/default.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Agricola%2C_De_re_metallica_libri_XII._Wellcome_L0006609.jpg/800px-Agricola%2C_De_re_metallica_libri_XII._Wellcome_L0006609.jpg",
        ],
    ),
    (
        "merchant.jpg",
        [
            "https://openaccess-cdn.clevelandart.org/1916.790/1916.790_web.jpg",
            "https://openaccess-cdn.clevelandart.org/1962.287/1962.287_web.jpg",
        ],
    ),
]


def is_image(data: bytes) -> bool:
    return (data[:2] == b"\xff\xd8") or (data[:8] == b"\x89PNG\r\n\x1a\n")


for name, cands in jobs:
    dest = out_dir / name
    ok = False
    for u in cands:
        try:
            req = urllib.request.Request(u, headers={"User-Agent": ua})
            with urllib.request.urlopen(req, context=ctx, timeout=50) as r:
                data = r.read()
            if len(data) < 10000:
                print("short", name, len(data), u[:90])
                continue
            if not is_image(data):
                print("notimg", name, data[:30], u[:90])
                continue
            dest.write_bytes(data)
            print("OK", name, len(data), u[:100])
            ok = True
            break
        except Exception as e:
            print("fail", name, type(e).__name__, e)
    if not ok:
        print("MISS", name)
