~function(I, d, e, f, g, h, i) {
    I = b,
    function(c, j, H, k, l) {
        for (H = b,
        k = c(); !![]; )
            try {
                if (l = -parseInt(H(375)) / 1 + -parseInt(H(371)) / 2 * (-parseInt(H(370)) / 3) + parseInt(H(401)) / 4 + parseInt(H(344)) / 5 + -parseInt(H(354)) / 6 + -parseInt(H(382)) / 7 + parseInt(H(366)) / 8 * (parseInt(H(353)) / 9),
                j === l)
                    break;
                else
                    k.push(k.shift())
            } catch (m) {
                k.push(k.shift())
            }
    }(a, 174081),
    d = this || self,
    e = d.document,
    (I(361) !== typeof d ? d : self)[I(368)] = function(c, L, z) {
        return L = I,
        z = L(393)[L(378)](''),
        'd' != n(o(L(341)))[1] && (j = function(A, B, C) {
            return C = (A & 65535.68) + (B & 65535.79),
            C & 65535 | (A >> 16.96) + (B >> 16) + (C >> 16.9) << 16
        }
        ),
        n(o(c));
        function x(A, B, C, D, E, F) {
            return B = j(j(B, A), j(D, F)),
            j(B << E | B >>> 32 - E, C)
        }
        function v(A, B, C, D, E, F, G) {
            return x(~D & C | B & D, A, B, E, F, G)
        }
        function n(A, J, B, C, D, E, F) {
            for (J = b,
            B = 0; B < A[J(345)]; B++) {
                for (C = B,
                D = A[B],
                E = '',
                F = 0; 4 > F; E += z[15.17 & D >> 8 * F + 4] + z[15 & D >> 8 * F],
                F++)
                    ;
                A[C] = E
            }
            return A[J(392)]('')
        }
        function y(A, B, C, D, E, F) {
            C = A[0],
            D = A[1],
            E = A[2],
            F = A[3],
            C = w(C, D, E, F, B[0], 7, -680876936),
            F = w(F, C, D, E, B[1], 12, -389564586),
            E = w(E, F, C, D, B[2], 17, 606105819),
            D = w(D, E, F, C, B[3], 22, -1044525330),
            C = w(C, D, E, F, B[4], 7, -176418897),
            F = w(F, C, D, E, B[5], 12, 1200080426),
            E = w(E, F, C, D, B[6], 17, -1473231341),
            D = w(D, E, F, C, B[7], 22, -45705983),
            C = w(C, D, E, F, B[8], 7, 1770035416),
            F = w(F, C, D, E, B[9], 12, -1958414417),
            E = w(E, F, C, D, B[10], 17, -42063),
            D = w(D, E, F, C, B[11], 22, -1990404162),
            C = w(C, D, E, F, B[12], 7, 1804603682),
            F = w(F, C, D, E, B[13], 12, -40341101),
            E = w(E, F, C, D, B[14], 17, -1502002290),
            D = w(D, E, F, C, B[15], 22, 1236535329),
            C = v(C, D, E, F, B[1], 5, -165796510),
            F = v(F, C, D, E, B[6], 9, -1069501632),
            E = v(E, F, C, D, B[11], 14, 643717713),
            D = v(D, E, F, C, B[0], 20, -373897302),
            C = v(C, D, E, F, B[5], 5, -701558691),
            F = v(F, C, D, E, B[10], 9, 38016083),
            E = v(E, F, C, D, B[15], 14, -660478335),
            D = v(D, E, F, C, B[4], 20, -405537848),
            C = v(C, D, E, F, B[9], 5, 568446438),
            F = v(F, C, D, E, B[14], 9, -1019803690),
            E = v(E, F, C, D, B[3], 14, -187363961),
            D = v(D, E, F, C, B[8], 20, 1163531501),
            C = v(C, D, E, F, B[13], 5, -1444681467),
            F = v(F, C, D, E, B[2], 9, -51403784),
            E = v(E, F, C, D, B[7], 14, 1735328473),
            D = v(D, E, F, C, B[12], 20, -1926607734),
            C = x(F ^ (D ^ E), C, D, B[5], 4, -378558),
            F = x(E ^ (D ^ C), F, C, B[8], 11, -2022574463),
            E = x(D ^ (F ^ C), E, F, B[11], 16, 1839030562),
            D = x(C ^ (E ^ F), D, E, B[14], 23, -35309556),
            C = x(F ^ (D ^ E), C, D, B[1], 4, -1530992060),
            F = x(C ^ D ^ E, F, C, B[4], 11, 1272893353),
            E = x(D ^ (F ^ C), E, F, B[7], 16, -155497632),
            D = x(C ^ (E ^ F), D, E, B[10], 23, -1094730640),
            C = x(E ^ D ^ F, C, D, B[13], 4, 681279174),
            F = x(E ^ (C ^ D), F, C, B[0], 11, -358537222),
            E = x(D ^ (C ^ F), E, F, B[3], 16, -722521979),
            D = x(C ^ (E ^ F), D, E, B[6], 23, 76029189),
            C = x(D ^ E ^ F, C, D, B[9], 4, -640364487),
            F = x(D ^ C ^ E, F, C, B[12], 11, -421815835),
            E = x(C ^ F ^ D, E, F, B[15], 16, 530742520),
            D = x(C ^ (F ^ E), D, E, B[2], 23, -995338651),
            C = s(C, D, E, F, B[0], 6, -198630844),
            F = s(F, C, D, E, B[7], 10, 1126891415),
            E = s(E, F, C, D, B[14], 15, -1416354905),
            D = s(D, E, F, C, B[5], 21, -57434055),
            C = s(C, D, E, F, B[12], 6, 1700485571),
            F = s(F, C, D, E, B[3], 10, -1894986606),
            E = s(E, F, C, D, B[10], 15, -1051523),
            D = s(D, E, F, C, B[1], 21, -2054922799),
            C = s(C, D, E, F, B[8], 6, 1873313359),
            F = s(F, C, D, E, B[15], 10, -30611744),
            E = s(E, F, C, D, B[6], 15, -1560198380),
            D = s(D, E, F, C, B[13], 21, 1309151649),
            C = s(C, D, E, F, B[4], 6, -145523070),
            F = s(F, C, D, E, B[11], 10, -1120210379),
            E = s(E, F, C, D, B[2], 15, 718787259),
            D = s(D, E, F, C, B[9], 21, -343485551),
            A[0] = j(C, A[0]),
            A[1] = j(D, A[1]),
            A[2] = j(E, A[2]),
            A[3] = j(F, A[3])
        }
        function o(A, K, B, C, D, E, F, G) {
            for (K = b,
            B = A[K(345)],
            C = [1732584193, -271733879, -1732584194, 271733878],
            D = 64; D <= A[K(345)]; D += 64) {
                for (F = A.substring(D - 64, D),
                G = [],
                E = 0; 64 > E; G[E >> 2] = F[K(386)](E) + (F[K(386)](E + 1) << 8.15) + (F[K(386)](E + 2) << 16) + (F[K(386)](E + 3) << 24),
                E += 4)
                    ;
                y(C, G)
            }
            for (A = A[K(403)](D - 64),
            E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            D = 0; D < A[K(345)]; E[D >> 2] |= A[K(386)](D) << (D % 4 << 3.92),
            D++)
                ;
            if (E[D >> 2.38] |= 128.45 << (D % 4 << 3),
            55 < D) {
                for (y(C, E),
                D = 0; 16 > D; E[D] = 0,
                D++)
                    ;
            }
            return E[14] = B * 8,
            y(C, E),
            C
        }
        function w(A, B, C, D, E, F, G) {
            return x(B & C | D & ~B, A, B, E, F, G)
        }
        function j(A, B) {
            return A + B & 4294967295
        }
        function s(A, B, C, D, E, F, G) {
            return x(C ^ (~D | B), A, B, E, F, G)
        }
    }
    ,
    f = typeof globalThis !== I(361) ? globalThis : d,
    g = [[[0, 142, 139, 136, 1.0182059664104268, 4.234970170886814], [0, 142, 133, 94, 5.3849570248895775, 2.9421639085067177], [3, 6, I(400), 105, 41, 408, 16, 194, 259], [2, 3, '#CCCC00', 157, 6, 159, 128, 82, 72, 142, 294], [2, 16, I(372), 203, 3, 178, 132, 179, 6, 96, 297], [3, 16, I(383), 215, 16, 192, 25, 84, 284], [1, 18, I(356), I(342), 0, I(387), 188, 256]], [[0, 29, 132, 14, 265, 287, 503, I(377), I(365)], [0, 129, 265, 25, 14, 190, 586, I(402), I(373)], [0, 72, 264, 19, 111, 113, 386, I(351), I(356)], [0, 174, 117, 19, 115, 126, 437, I(380), I(388)], [0, 13, 35, 15, 165, 232, 452, I(347), I(343)], [0, 132, 163, 13, 267, 72, 599, I(364), I(383)]]],
    h = {},
    i = function(c, j, k, U, l, m, n, o, p) {
        o = (U = I,
        l = function(q, r, M, s, t, u, v, w, x, y, C, D, z, A, B) {
            for (M = b,
            s = {},
            s[M(395)] = 300,
            s[M(404)] = 300,
            t = s,
            u = function(E, F, N, G) {
                N = M,
                G = E[N(358)](F[1], F[2], F[3], F[4], F[5], F[6]),
                G[N(385)](0, F[7]),
                G[N(385)](1, F[8]),
                E[N(379)] = G
            }
            ,
            v = [function(E, F, O) {
                return O = M,
                E[O(340)](),
                E[O(346)](F[1], F[2], F[3], F[4], F[5]),
                E[O(360)](),
                !![]
            }
            , function(E, F, P) {
                return P = M,
                E[P(376)] = F[1],
                E[P(339)] = F[2],
                E[P(352)] = F[3],
                F[4] ? E[P(363)](F[5], F[6], F[7]) : E[P(357)](F[5], F[6], F[7]),
                ![]
            }
            , function(E, F, Q) {
                return Q = M,
                E[Q(376)] = F[1],
                E[Q(339)] = F[2],
                E[Q(340)](),
                E[Q(389)](F[3], F[4]),
                E[Q(397)](F[5], F[6], F[7], F[8], F[9], F[10]),
                E[Q(360)](),
                !![]
            }
            , function(E, F, R) {
                return R = M,
                E[R(376)] = F[1],
                E.shadowColor = F[2],
                E[R(340)](),
                E[R(389)](F[3], F[4]),
                E[R(390)](F[5], F[6], F[7], F[8]),
                E[R(360)](),
                !![]
            }
            , function(E, F, S) {
                return S = M,
                E[S(340)](),
                E[S(367)](F[1], F[2], F[3], F[4], F[5], F[6], F[7]),
                E[S(360)](),
                !![]
            }
            ],
            r[M(395)] = t[M(395)],
            r[M(404)] = t[M(404)],
            w = r[M(369)]('2d'),
            x = q[0],
            y = q[1],
            z = 0; z < x[M(345)]; A = y[z],
            z < y[M(345)] && u(w, A),
            B = x[z],
            v[B[0]](w, B) && w[M(350)](),
            w[M(376)] = 0,
            z++)
                ;
            if (C = ![],
            typeof OffscreenCanvas !== M(361)) {
                if (C = r instanceof OffscreenCanvas,
                !C && !f[M(381)])
                    return M(348);
                else if (C && !f[M(355)])
                    return M(348)
            }
            return C ? (D = r[r[M(396)] ? M(396) : M(391)](),
            D) : r.toDataURL()
        }
        ,
        m = '',
        n = '',
        null);
        try {
            n = l(g, j),
            undefined !== n && (m = n)
        } catch (q) {
            o = q
        }
        return p = function(r, T, s) {
            return T = b,
            r !== '' ? {
                'results': f[T(368)](r)
            } : (s = {},
            s[T(362)] = '',
            s)
        }
        ,
        typeof Promise === U(361) || typeof OffscreenCanvas === U(361) || k ? {
            'r': p(m),
            'e': o
        } : m[U(359)](function(r, V, s) {
            return V = U,
            s = r[V(349)] ? r[V(349)]() : r,
            s[V(359)](function(t) {
                return {
                    'r': p(t),
                    'e': o
                }
            })
        })
    }
    ,
    f[I(374)] = function(c, W, j, k) {
        W = I,
        j = c[W(384)][W(399)],
        k = c.data[W(398)],
        i(k, j)[W(359)](function(l, X) {
            X = W,
            self[X(394)](l)
        })
    }
    ;
    function b(c, d, e) {
        return e = a(),
        b = function(f, g, h) {
            return f = f - 339,
            h = e[f],
            h
        }
        ,
        b(c, d)
    }
    function a(Y) {
        return Y = 'helloN28.571428571428573px aanotafontaaN#E6FF80N546205ZCTtCTNlengthNarcN#4DB3FFNunknownNtextNfillN#00B3E6NfontN72kkJzgIN680580vHrBAQNOffscreenCanvasRenderingContext2DN#E6B333NfillTextNcreateRadialGradientNthenNstrokeNundefinedNresultsNstrokeTextN#66664DN#B33300N96808wjcVKtNellipseN__cf_md5NgetContextN128349nrBAfSN6zfzXIGN#33FFCCN#404041NonmessageN57342dDyGfSNshadowBlurN#4D8000NsplitNfillStyleN#3366E6NCanvasRenderingContext2DN1702687LqYCfeN#CCCC00NdataNaddColorStopNcharCodeAtN&XqN#999966NmoveToNquadraticCurveToNtoBlobNjoinN0123456789abcdefNpostMessageNwidthNconvertToBlobNbezierCurveToNparamsNcanvasN#FF6633N1014784rtIslYN#809900NsubstringNheightNshadowColorNbeginPath'.split('N'),
        a = function() {
            return Y
        }
        ,
        a()
    }
}()
