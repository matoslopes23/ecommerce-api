import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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



}
