DELIMITER //

CREATE PROCEDURE GetRoomEnergyUsage()
BEGIN
    SELECT
        r.room_name,
        DATE(e.timestamp) AS usage_day,
        SUM(e.energy_kwh) AS total_energy
    FROM energy_logs e
    JOIN devices d ON e.device_id = d.device_id
    JOIN rooms r ON d.room_id = r.room_id
    GROUP BY r.room_name, DATE(e.timestamp);
END //

DELIMITER ;

CALL GetRoomEnergyUsage();