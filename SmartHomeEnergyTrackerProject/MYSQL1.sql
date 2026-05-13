CREATE DATABASE smart_home_energy;

USE smart_home_energy;

CREATE TABLE rooms (
    room_id INT PRIMARY KEY AUTO_INCREMENT,
    room_name VARCHAR(100)
);

CREATE TABLE devices (
    device_id INT PRIMARY KEY AUTO_INCREMENT,
    device_name VARCHAR(100),
    room_id INT,
    device_type VARCHAR(50),
    status VARCHAR(20),
    FOREIGN KEY (room_id) REFERENCES rooms(room_id)
);

CREATE TABLE energy_logs (
    log_id INT PRIMARY KEY AUTO_INCREMENT,
    device_id INT,
    timestamp DATETIME,
    energy_kwh DECIMAL(10,2),
    FOREIGN KEY (device_id) REFERENCES devices(device_id)
);

INSERT INTO rooms (room_name)
VALUES
('Living Room'),
('Kitchen'),
('Bedroom');

INSERT INTO devices (device_name, room_id, device_type, status)
VALUES
('Air Conditioner', 1, 'Cooling', 'ON'),
('Refrigerator', 2, 'Appliance', 'ON'),
('Smart TV', 1, 'Entertainment', 'OFF'),
('Washing Machine', 2, 'Appliance', 'ON');

INSERT INTO energy_logs (device_id, timestamp, energy_kwh)
VALUES
(1, NOW(), 5.6),
(2, NOW(), 2.4),
(3, NOW(), 1.2),
(4, NOW(), 3.7);

SELECT * FROM rooms;

SELECT * FROM devices;

SELECT * FROM energy_logs;

INSERT INTO devices (device_name, room_id, device_type, status)
VALUES ('Fan', 3, 'Cooling', 'ON');

SELECT * FROM devices;

UPDATE devices
SET status='OFF'
WHERE device_id=1;

DELETE FROM devices
WHERE device_id=5;

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

CREATE INDEX idx_device_id
ON energy_logs(device_id);

CREATE INDEX idx_timestamp
ON energy_logs(timestamp);



