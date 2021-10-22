import { Coupon } from 'App/Models/Coupon';
import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Order from './Order'

export default class Discount extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public static get table() {
    return 'coupon_orders'
  }

  @manyToMany(() => Order, {
    pivotForeignKey: 'order_id',
    relatedKey: 'id'
  })
  public orders: ManyToMany<typeof Order>
  @manyToMany(() => Coupon, {
    pivotForeignKey: 'coupon_id',
    relatedKey: 'id'
  })
  public coupons: ManyToMany<typeof Coupon>
}
