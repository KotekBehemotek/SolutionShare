package pl.komorski.tomasz.solutionv2.service;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Logger;

public class DataBaseConnector {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    static {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public Connection connectToSolutionUsers() throws SQLException {
        LOGGER.info("began connectToSolutionUsers()");

        return DriverManager.getConnection("jdbc:postgresql://localhost:5432/Solution", "postgres", "kan1apka");
    }
}