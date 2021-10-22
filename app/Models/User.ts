import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Image from 'App/Models/Image'
import Coupon from 'App/Models/Coupon'
import PasswordReset from 'App/Models/PasswordReset'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'image_id' })
  public imageId: number
  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Image, {
    foreignKey: 'image_id'
  })
  public images: BelongsTo<typeof Image>

  @manyToMany(() => Coupon)
  public coupons: ManyToMany<typeof Coupon>

  @hasMany(() => PasswordReset, {
    foreignKey: 'userId'
  })
  public passwordReset: HasMany<typeof PasswordReset>

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
