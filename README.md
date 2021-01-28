# learn-sqlite

- SQLite is a relational database management system contained in a C library. In contrast to many other database management systems, SQLite is not a client–server database engine. Rather, it is embedded into the end program.

- SQLite is an in-process library that implements a self-contained, serverless, zero-configuration, transactional SQL database engine. The code for SQLite is in the public domain and is thus free for use for any purpose, commercial or private.

SQLite Advantages
SQLite is a very popular database which has been successfully used with on disk file format for desktop applications like version control systems, financial analysis tools, media cataloging and editing suites, CAD packages, record keeping programs etc.

There are a lot of advantages to use SQLite as an application file format:

1. Lightweight
   SQLite is a very light weighted database so, it is easy to use it as an embedded software with devices like televisions, Mobile phones, cameras, home electronic devices, etc.
2. Better Performance
   Reading and writing operations are very fast for SQLite database. It is almost 35% faster than File system.
   It only loads the data which is needed, rather than reading the entire file and hold it in memory.
   If you edit small parts, it only overwrite the parts of the file which was changed.
3. No Installation Needed
   SQLite is very easy to learn. You don?t need to install and configure it. Just download SQLite libraries in your computer and it is ready for creating the database.
4. Reliable
   It updates your content continuously so, little or no work is lost in a case of power failure or crash.
   SQLite is less bugs prone rather than custom written file I/O codes.
   SQLite queries are smaller than equivalent procedural codes so, chances of bugs are minimal.
5. Portable
   SQLite is portable across all 32-bit and 64-bit operating systems and big- and little-endian architectures.
   Multiple processes can be attached with same application file and can read and write without interfering each other.
   It can be used with all programming languages without any compatibility issue.
6. Accessible
   SQLite database is accessible through a wide variety of third-party tools.
   SQLite database's content is more likely to be recoverable if it has been lost. Data lives longer than code.
7. Reduce Cost and Complexity
   It reduces application cost because content can be accessed and updated using concise SQL queries instead of lengthy and error-prone procedural queries.
   SQLite can be easily extended in in future releases just by adding new tables and/or columns. It also preserve the backwards compatibility.
   SQLite Disadvantages
   SQLite is used to handle low to medium traffic HTTP requests.
   Database size is restricted to 2GB in most cases.
