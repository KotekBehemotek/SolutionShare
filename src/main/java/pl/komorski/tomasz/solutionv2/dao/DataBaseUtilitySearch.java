package pl.komorski.tomasz.solutionv2.dao;

import pl.komorski.tomasz.solutionv2.service.DataBaseConnector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

public class DataBaseUtilitySearch {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    // NOTE: I would return whole class object e.g.: User
    public int searchForIDByEmail(String email, Connection connTSU) throws SQLException {
        LOGGER.info("begin searchForIDByEmail()");

        PreparedStatement prepareToFindID = connTSU.prepareStatement("SELECT (userID) FROM users WHERE (email) = (?);");
        prepareToFindID.setString(1, email);
        ResultSet preparedID = prepareToFindID.executeQuery();

        if (preparedID.next()) {
            LOGGER.info("ID found");
            LOGGER.info("Exiting searchForIDByEmail()");

            return preparedID.getInt(1);
        } else {
            LOGGER.info("ID was not found");
            LOGGER.info("Exiting searchForIDByEmail()");

            return 0;
        }
    }

    // NOTE: passwords have to be encrypted, use e.g.: BCrypt or MD5
    public String searchForPasswordByEmail(String email, Connection connTSU) throws SQLException {
        LOGGER.info("begin searchForPasswordByEmail()");

        PreparedStatement prepareToFindPassword = connTSU.prepareStatement("SELECT (password) FROM users WHERE (email) = (?);");
        prepareToFindPassword.setString(1, email);
        ResultSet preparedPassword = prepareToFindPassword.executeQuery();

        if (preparedPassword.next()) {
            LOGGER.info("Password found");
            LOGGER.info("Exiting searchForPasswordByEmail()");

            return preparedPassword.getString(1);
        } else {
            LOGGER.info("Password was not found");
            LOGGER.info("Exiting searchForPasswordByEmail()");

            return "nope";
        }
    }
}