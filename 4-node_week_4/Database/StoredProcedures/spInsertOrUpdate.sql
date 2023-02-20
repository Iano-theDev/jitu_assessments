-- insert or update User Table
CREATE   PROCEDURE spInsertOrUpdate (@id VARCHAR(50), @name VARCHAR(100)=NULL, @email VARCHAR(100)=NULL, @password VARCHAR(100))
AS
BEGIN

IF EXISTS (SELECT * FROM UserTable WHERE Id = @id)
BEGIN
UPDATE UserTable SET Name=@Name, Email=@email, Password=@password
WHERE Id = @id

END
ELSE
BEGIN
INSERT INTO UserTable (Id, Name, Email, Password)
VALUES( @id, @name, @email, @password)
END
END