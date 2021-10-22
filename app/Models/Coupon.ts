import Product from 'App/Models/Product';
import User from 'App/Models/User';
import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public code: string

  @column()
  public valid_from: Date

  @column()
  public valid_until: Date

  @column()
  public can_use_for: 'product' | 'client' | 'product_client' | 'all'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => User)
  public users: ManyToMany<typeof User>

  @manyToMany(() => Product)
  public products: ManyToMany<typeof Product>
}
