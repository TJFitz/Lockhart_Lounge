USE restaurantdb;

INSERT INTO Bookings (name, email, phone, qty, message) VALUES ("Steve and Company", "stevesemail@email.com", 1111111111, 000, "Message from Steve");

INSERT INTO Menu (category) VALUES ("test menu");

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Spring Avocado Toast", "Grilled sourdough bread, avocado, fresh greens", 8.99, "730cal", "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Smoked Salmon Crisps", "Salmon cornets topped with creme fraiche and fresh salmon", 10.99, "920cal", "https://images.pexels.com/photos/41967/appetizer-canape-canapes-cheese-41967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Sweet Potato Fries", "Hand-cut sweet potato fries with flavorful garnishes", 11.99, "540cal", "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);



INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Lockhart Filet", "Tender-cut filet, hand-seasoned and cooked to perfection", 15.99, "1020cal", "https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Cherry Tomato Pasta", "Angel hair pasta with fresh cherry tomatoes", 13.99, "940cal", "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Herb Grilled Salmon", "Grilled, bourbon-glazed salmon over rice", 12.99, "860cal", "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);




INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Mohito", "White rum, mint, and a drizzle of lime", 12.99, "450cal", "https://images.pexels.com/photos/4784/alcohol-bar-party-cocktail.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Earl Gray Martini", "Tea leaves, lemon juice, white sugar and gin", 10.99, "160", "https://images.pexels.com/photos/613037/pexels-photo-613037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Fruity Cooler", "Patron mixed with our signature fruit juice", 6.99, "230cal", "https://images.pexels.com/photos/452737/pexels-photo-452737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Signature Sangria", "A blend of chilled wine, fresh fruit and fruit juices. The ultimate refresher.", 12.99, "420cal", "assets/images/menu12.jpg", 1);

