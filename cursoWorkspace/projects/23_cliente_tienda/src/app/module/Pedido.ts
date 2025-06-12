export class Pedido {
  idPedido:number
  codigoProducto:number
  unidades:number
  total:number
  fechaPedido:Date
  constructor(idPedido?:number,codigoProducto?:number,unidades?:number,total?:number,fechaPedido?:Date){
    this.idPedido=idPedido
    this.codigoProducto=codigoProducto
    this.unidades=unidades
    this.total=total
    this.fechaPedido=fechaPedido
  }
}
