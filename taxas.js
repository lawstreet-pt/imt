/**
 * TABELAS DE IMT E IMPOSTO DO SELO 2026 - PORTUGAL CONTINENTE
 * Valores atualizados conforme o Orçamento do Estado.
 * Valores atualizados com benefício Jovem integrado (IMT + IS)
 */

const TABELAS_IMT = {
    is_taxa: 0.008, // Taxa padrão 0.8%

    continente: {
        h_permanente: [
            { limite: 106346, taxa: 0, abater: 0 },
            { limite: 145470, taxa: 0.02, abater: 2126.92 },
            { limite: 198347, taxa: 0.05, abater: 6491.02 },
            { limite: 330539, taxa: 0.07, abater: 10457.96 },
            { limite: 660982, taxa: 0.08, abater: 13763.35 },
            { limite: 1150853, taxa: 0.06, abater: 0 },
            { limite: Infinity, taxa: 0.075, abater: 0 }
        ],

        h_secundaria: [
            { limite: 106346, taxa: 0.01, abater: 0 },
            { limite: 145470, taxa: 0.02, abater: 1063.46 },
            { limite: 198347, taxa: 0.05, abater: 5427.56 },
            { limite: 330539, taxa: 0.07, abater: 9394.50 },
            { limite: 633931, taxa: 0.08, abater: 12699.89 },
            { limite: 1150853, taxa: 0.06, abater: 0 },
            { limite: Infinity, taxa: 0.075, abater: 0 }
        ],

        rustico: [{ limite: Infinity, taxa: 0.05, abater: 0 }],
        outros: [{ limite: Infinity, taxa: 0.065, abater: 0 }],

        // IMT E IS JOVEM INTEGRADOS
        imt_jovem: [
            { limite: 330539, taxa: 0, abater: 0, taxa_is: 0, abater_is: 0 },
            { limite: 660982, taxa: 0.08, abater: 26443.12, taxa_is: 0.008, abater_is: 2644.31 },
            { limite: 1150853, taxa: 0.06, abater: 0, taxa_is: 0.008, abater_is: 0 },
            { limite: Infinity, taxa: 0.075, abater: 0, taxa_is: 0.008, abater_is: 0 }
        ]
    }
};
