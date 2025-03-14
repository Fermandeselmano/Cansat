import { mysqlTable, mysqlSchema, int, float, timestamp } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"

export const cansat = mysqlTable("cansat", {
	id: int("ID").autoincrement().notNull(),
	latitude: float("Latitude").notNull(),
	longitude: float("Longitude").notNull(),
	velocidade: float("Velocidade").notNull(),
	gpsAltitude: float("GPSAltitude").notNull(),
	temperatura: float("Temperatura").notNull(),
	presssao: float("Presssao").notNull(),
	altitude: float("Altitude").notNull(),
	humidade: float("Humidade").notNull(),
	pich: float("Pich").notNull(),
	roll: float("Roll").notNull(),
	yaw: float("Yaw").notNull(),
	voltagem: float("Voltagem").notNull(),
	time: timestamp("Time", { mode: 'string' }).default('current_timestamp()').notNull(),
});
