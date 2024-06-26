import { Product } from '../entities/product.entity';

export function convertArrayToObject(input: any[]): Product {
  return {
    CODIGO: input[0] as number,
    CODIGO_BARRAS: input[1] as string,
    REFERENCIA: input[2] as string,
    FORNECEDORES_CODIGO: input[3] as string,
    DESCRICAO: input[4] as string,
    FORNECEDOR: input[5] as string,
    CUSTO: input[6] as number,
    LUCRO: input[7] as number,
    VENDA: input[8] as number,
    QUANTIDADE: input[9] as number,
    UNIDADE: input[10] as string,
    MARCA: input[11] as string,
    GRUPO: input[12] as string,
    NCM: input[13] as string,
    CEST: input[14] as string,
    CFOP: input[15] as string,
    IPIDECOMPRA: input[16] as number,
    IPIDEVENDA: input[17] as number,
    ALIQUOTAESPECIFIDA: input[18] as number,
    CSTIPIDECOMPRA: input[19] as string,
    CSTIPIDEVENDA: input[20] as string,
    TRIBUTACAO: input[21] as string,
    NACIONALIDADE: input[22] as string,
    FINALIDADE: input[23] as string,
    INATIVO: input[24] === 1,
    PISCOMPRA: input[25] as number,
    PISVENDA: input[26] as number,
    COFINSCOMPRA: input[27] as number,
    COFINSVENDA: input[28] as number,
    CSTPISCOFINSENTRADA: input[29] as string,
    CSTPISCOFINSSAIDA: input[30] as string,
    FCPALIQUOTA: input[31] as number,
    IMPRIMIREM: input[32] as string,
    IMAGEM: input[33] as string,
    VENDA_ATACADO: input[34] === 1,
    ABATERDOESTOQUE: input[35] === 1,
    COMISSAOINDIVIDUAL: input[36] === 1,
    PORCENTAGEMCOMISSAO: input[37] as number,
    AVISAESTOQUEMINIMO: input[38] === 1,
    QUANTIDADEMINIMA: input[39] as number,
    TIPO_MEDICAMENTO: input[40] as string,
    CODIGO_MEDICAMENTO: input[41] as string,
    DATAVALIDADE: new Date(input[42] as number), // Assuming input[40] is a timestamp
    IDLOTE: input[43] as string,
    PIS_COFINS_CUSTOM: input[44] === 1,
    CONSIDERAR_QUANTIDADES_GRADE: input[45] === 1,
    CONSIDERAR_QTDMINIMA_GRADE: input[46] === 1,
    ICMS_FRONTEIRA: input[47] as number,
    IMPRESSORA_TERMINAL: input[48] as string,
    ISTIPOBATERIA: input[49] === 1,
    PESO: input[50] as number,
  };
}

export function convertArrayOfArraysToObjects(input: any[][]): Product[] {
  return input.map((innerArray) => convertArrayToObject(innerArray));
}
