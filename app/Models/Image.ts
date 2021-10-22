import Env from '@ioc:Adonis/Core/Env';
import { DateTime } from 'luxon'
import { afterFetch, BaseModel, column, HasMany, hasMany, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User';
import Category from 'App/Models/Category';
import Product from 'App/Models/Product';

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public path: string

  @column()
  public size: number

  @column()
  public original_name: string

  @column()
  public extension: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public users: HasOne<typeof User>

  @hasOne(() => Product)
  public products: HasOne<typeof Product>

  @hasMany(() => Category, {
    foreignKey: 'image_id'
  })
  public categories: HasMany<typeof Category>

  @afterFetch()
  public static get computed() {
    return ['url']
  }

  getUrl({ path }) {
    return `${Env.get('BASE_URL')}/images/${path}`
  }

}
