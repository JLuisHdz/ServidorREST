export class ViajeModel {
    _id?: string;
    destino: string;
    actual: string;
    metodo: string;
    costo: number;
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
}