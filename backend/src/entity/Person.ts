import { Exclude, Expose, Type } from "class-transformer";
import { IsEmail, ValidateNested } from "class-validator";
import * as mongodb from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

import { Name } from "./Name";

@Entity()
export class Person {
  //Exluding this as typeORM return JSON _id instead of string
  @ObjectIdColumn()
  @Exclude()
  _id: mongodb.ObjectId;

  //Converting manually to String and exposing id
  @Expose()
  public get id() {
    return this._id ? this._id.toHexString() : undefined;
  }

  @Column((type) => Name)
  @ValidateNested()
  @Type(() => Name)
  name: Name;

  @Column()
  @IsEmail({}, { message: "Invalid email" })
  email: string;
}
