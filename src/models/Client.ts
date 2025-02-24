import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Clients',
  modelName: 'Client'
})
export class Client extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  salary!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false
  })
  companyValue!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false
  })
  selected!: boolean;
}