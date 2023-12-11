class Blockedsite < ApplicationRecord
  def display_days
    #currentTime = DateTime.now.to_time.to_i
    #(@blockedsite.duedate.to_time.to_i-currentTime)/60/60/24

    ((duedate - Time.now)/60/60/24).to_i
  end

  def display_hours
    (((duedate - Time.now)-((duedate - Time.now)/60/60/24).to_i*24*60*60)/60/60).round
  end

  def display_minutes
    (((duedate-Time.now)-(display_days*60*60*24+display_hours*60*60))/60).round
  end

  def display_seconds
    ((duedate)-((display_days.to_i*24*60*60)+(display_hours.to_i*60*60)+(display_minutes.to_i*60))).to_i.round
  end
end
