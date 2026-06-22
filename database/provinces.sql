Drop table if exists province
create table
    province (
        id serial primary key,
        name varchar(100) not null,
        full_name varchar(150) not null,
        latitude numeric,
        longitude numeric,
        display_order int
    )
insert into provinces (name, full_name, latitude, longitude, display_order) values
('Ciudad Autónoma de Buenos Aires', 'Ciudad Autónoma de Buenos Aires', -34.61444091796875, -58.445877075195312, 1),
('Buenos Aires', 'Provincia de Buenos Aires', -36.6769415180527, -60.5588319815719, 2),
('Catamarca', 'Provincia de Catamarca', -27.3358332810217, -66.9476824299928, 3),
('Chaco', 'Provincia del Chaco', -26.3864309061226, -60.7658307438603, 4),
('Chubut', 'Provincia del Chubut', -43.7886233529878, -68.5267593943345, 5);