"""Balance: pike max 4, shot soft vs cavalry, mix required.

Actual enemy power: levy3, pike5, knight10
W1 3levy=9, W2 4pike=20, W3 5pike=25, W4 4p+1k=30, W5 3p+2k=35
"""

units = {
    "k": dict(p=12, c=24, n=14),
    "p": dict(p=6, c=9, n=3),
    "s": dict(p=9, c=10, n=0),
}
PIKE_BONUS = 4
PIKE_MAX = 4
SHOT_VS_K = 6


def price(u, infl, n):
    c = units[u]["c"] * infl
    if u == "k":
        if n < 22:
            c *= 1.55
        elif n < 35:
            c *= 1.28
    return round(c)


def upow(u, ek):
    if u == "s" and ek:
        return SHOT_VS_K
    p = units[u]["p"]
    if u == "p" and ek:
        p += PIKE_BONUS
    return p


def try_comp(comp, foe, infl, nobles, ek):
    if comp.get("p", 0) > PIKE_MAX:
        return None
    if sum(comp.values()) > 8:
        return None
    pow_ = sum(comp[u] * upow(u, ek) for u in comp)
    cost = sum(comp[u] * price(u, infl, nobles) for u in comp)
    noble = sum(comp[u] * units[u]["n"] for u in comp)
    return pow_, cost, noble, pow_ >= foe


waves = [
    (9, 1.0, 28, False, "3levy"),
    (20, 1.0, 34, False, "4pike"),
    (25, 1.15, 40, False, "5pike"),
    (30, 1.4, 46, True, "4p+1k"),
    (35, 1.65, 50, True, "3p+2k"),
]

paths = [
    ("mix", [{"k": 1}, {"p": 3, "s": 1}, {"s": 3}, {"p": 4, "s": 1}, {"p": 4, "s": 1}]),
    ("allpike", [{"k": 1}, {"p": 4}, {"p": 4}, {"p": 4}, {"p": 4}]),
    ("allshot", [{"k": 1}, {"s": 3}, {"s": 3}, {"s": 5}, {"s": 6}]),
]

for name, path in paths:
    t, n = 100, 42
    print("===", name)
    ok = True
    for i, (foe, infl, inc, ek, lab) in enumerate(waves):
        r = try_comp(path[i], foe, infl, n, ek)
        if not r:
            print(" invalid", path[i])
            ok = False
            break
        pow_, cost, noble, win = r
        if cost > t or not win:
            print(f" W{i+1} {lab} FAIL {pow_}/{foe} c{cost}/{t} {path[i]}")
            ok = False
            break
        t = t - cost + inc
        n = min(100, n + noble)
        print(f" W{i+1} {lab} {path[i]} {pow_}>={foe} c{cost} -> T{t}")
    print(" OK" if ok else " FAIL", "T", t)
    print()
