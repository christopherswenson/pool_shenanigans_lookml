view: players {
  derived_table: {
    sql: SELECT * FROM `pool-product-day.pool_shenanigans.players`;;
  }

  measure: count {
    type: count
    drill_fields: [detail*]
  }

  dimension: id {
    type: number
    sql: ${TABLE}.id ;;
  }

  dimension: first_name {
    type: string
    sql: ${TABLE}.first_name ;;
  }

  dimension: last_name {
    type: string
    sql: ${TABLE}.last_name ;;
  }

  set: detail {
    fields: [id, first_name, last_name]
  }
}