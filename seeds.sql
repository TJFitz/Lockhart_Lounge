USE restaurantdb;

INSERT INTO Bookings (name, email, phone, qty, message) VALUES ("Steve and Company", "stevesemail@email.com", 1111111111, 000, "Message from Steve");

INSERT INTO Menu (category) VALUES ("test menu");

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Stuffed Mushrooms", "Hand-stuffed with garlic herb cheese, topped with Parmesan crust and served over a creamy blend of four melted cheeses.", 8.99, "730cal", "assets/images/menu1.jpg", 1);

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Spicy Chicken Bites", "Fresh and tender hand-cut chicken tossed in a sweet and spicy chili-ginger sauce. Garnished with peppers and spices for an added kick.", 10.99, "920cal", "assets/images/menu2.jpg", 1);

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Grilled Chicken Salad", "Fresh, crisp field greens with grapes, strawberries, mandarin oranges, candied pecans and feta cheese. All tossed up in a sweet raspberry vinaigrette.", 11.99, "540cal", "assets/images/menu3.jpg", 1);

INSERT INTO Appetizers (name, description, price, tags, image, MenuId) VALUES ("Firecracker Wraps", "Spicy grilled chicken and cheese wrapped in a crispy flour tortilla, and served with a cool avocado-lime dipping sauce.", 9.99, "810cal", "assets/images/menu4.jpg", 1);



INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("The Lockhart Burger", "Our thick, juicy half-pound burger grilled to order with lettuce, onion, tomato, bacon and housemade burger sauce on a toasted potato bun.", 15.99, "1020cal", "assets/images/menu5.jpg", 1);

INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Redrock Shrimp", "Grilled jumbo shrimp glazed with smoky tomato butter, served over rice with garlic butter. Served with brocolli and your choice of soup or salad.", 13.99, "940cal", "assets/images/menu6.jpg", 1);

INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Parmesan Chicken", "Our fresh, juicy, grilled chicken becomes irresistible when we top it with our creamy, crunchy Parmesan and garlic cheese crust.", 12.99, "860cal", "assets/images/menu7.jpg", 1);

INSERT INTO Entrees (name, description, price, tags, image, MenuId) VALUES ("Porterhouse Steak", "Got the biggest steak in the game wearing our name! Our 22 oz porterhouse combines a bone-in strip and a tender filet into one thick cut.", 17.99, "1250cal", "assets/images/menu8.jpg", 1);



INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Three Dons", "Don Julio Blanco, Reposado and Añejo with triple sec and all-natural sweet and sour.", 12.99, "450cal", "assets/images/menu9.jpg", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Old Fashioned", "Single Barrel Bourbon, Italian Amarena cherry, orange wedge and Angostura bitters.", 10.99, "160", "assets/images/menu10.jpg", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Golden Ale", "A clean and crisp golden ale that pairs perfectly with our menu.", 6.99, "230cal", "assets/images/menu11.jpg", 1);

INSERT INTO Drinks (name, description, price, tags, image, MenuId) VALUES ("Signature Sangria", "A blend of chilled wine, fresh fruit and fruit juices. The ultimate refresher.", 12.99, "420cal", "assets/images/menu12.jpg", 1);

