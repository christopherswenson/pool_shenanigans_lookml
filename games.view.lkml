view: games {
  derived_table: {
    sql: SELECT * FROM `pool-product-day.pool_shenanigans.games` ;;
  }

  measure: count {
    type: count
    drill_fields: [detail*]
  }

  dimension: id {
    type: number
    sql: ${TABLE}.id ;;
  }

  dimension: player_1_id {
    type: number
    sql: ${TABLE}.player_1_id ;;
  }

  dimension: player_2_id {
    type: number
    sql: ${TABLE}.player_2_id ;;
  }

  dimension_group: start_time {
    type: time
    sql: ${TABLE}.start_time ;;
  }

  dimension_group: end_time {
    type: time
    sql: ${TABLE}.end_time ;;
  }

  dimension: winner_id {
    type: number
    sql: ${TABLE}.winner_id ;;
  }

  set: detail {
    fields: [
      id,
      player_1_id,
      player_2_id,
      start_time_time,
      end_time_time,
      winner_id
    ]
  }
}