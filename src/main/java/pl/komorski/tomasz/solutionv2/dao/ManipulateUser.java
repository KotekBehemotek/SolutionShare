package pl.komorski.tomasz.solutionv2.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Logger;

public class ManipulateUser {
    private static final Logger LOGGER = Logger.getLogger(ManipulateUser.class.getName());

    public boolean saveUser(String email, String password, Connection connTSU) throws SQLException {
        LOGGER.info("began saveUser()");

        PreparedStatement prepareToSave = connTSU.prepareStatement("INSERT INTO users (email, password) VALUES (?, ?);");
        prepareToSave.setString(1, email);
        prepareToSave.setString(2, password);
        int counterAdd = prepareToSave.executeUpdate();

        LOGGER.info("user was saved");

        return counterAdd > 0;
    }

    public boolean removeUser(String email, Connection connTSU) throws SQLException {
        LOGGER.info("began removeUser()");

        PreparedStatement prepareToRemove = connTSU.prepareStatement("DELETE FROM users WHERE (email) = (?);");
        prepareToRemove.setString(1, email);
        int counterRemove = prepareToRemove.executeUpdate();

        LOGGER.info("user was removed");

        return counterRemove > 0;
    }

    ArrayList<Object> findAndGetUser(String email, Connection connTSU) throws SQLException {
        LOGGER.info("began findAndGetUser()");

        PreparedStatement prepareToFind = connTSU.prepareStatement("SELECT * FROM users WHERE (email) = (?);");
        prepareToFind.setString(1, email);
        ResultSet foundUser = prepareToFind.executeQuery();

        LOGGER.info("user was found");

        ArrayList<Object> gotUser = new ArrayList<>();

        while (foundUser.next()) {
            gotUser.add(foundUser.getInt(1));
            gotUser.add(foundUser.getString(2));
        }

        LOGGER.info("user read to Array");

        return gotUser;
    }

    public boolean searchForUserByEmail(String email, Connection connTSU) throws SQLException {
        LOGGER.info("began searchForUserByEmail()");

        PreparedStatement prepareToCheck = connTSU.prepareStatement("SELECT * FROM users WHERE (email) = (?);");
        prepareToCheck.setString(1, email);
        ResultSet counterAssure = prepareToCheck.executeQuery();

        LOGGER.info("searched for user");

        return !counterAssure.next();
    }

    public boolean addNamesToUser(int id, String name1, String name2, String surname, Connection connTSU) throws SQLException {
        LOGGER.info("began addNamesToUser()");

        PreparedStatement prepareToAdd = connTSU.prepareStatement("UPDATE users SET firstname = ?, secondname = ?, surname = ? WHERE userid = ?");
        prepareToAdd.setString(1, name1);
        prepareToAdd.setString(2, name2);
        prepareToAdd.setString(3, surname);
        prepareToAdd.setInt(4, id);

        int counterSave = prepareToAdd.executeUpdate();

        return counterSave > 0;
    }

    public boolean addGeneralToUser(int id, int year, String city, String country, Connection connTSU) throws SQLException {
        LOGGER.info("began addGeneralToUser()");

        PreparedStatement prepareToAdd = connTSU.prepareStatement("UPDATE users SET year = ?, city = ?, country = ? WHERE userid = ?");
        prepareToAdd.setInt(1, year);
        prepareToAdd.setString(2, city);
        prepareToAdd.setString(3, country);
        prepareToAdd.setInt(4, id);

        int counterSave = prepareToAdd.executeUpdate();

        return counterSave > 0;
    }

    public boolean addContactToUser(int id, int number, String otherMail, Connection connTSU) throws SQLException {
        LOGGER.info("began addContactToUser()");

        PreparedStatement prepareToAdd = connTSU.prepareStatement("UPDATE users SET number = ?, othermail = ? WHERE userid = ?");
        prepareToAdd.setInt(1, number);
        prepareToAdd.setString(2, otherMail);
        prepareToAdd.setInt(3, id);

        int counterSave = prepareToAdd.executeUpdate();

        return counterSave > 0;
    }

    public ArrayList<Object> loadInfFromUser(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began loadInfFromUser()");

        PreparedStatement prepareToLoad = connTSU.prepareStatement("SELECT firstname, secondname, surname, year, city, country, number, othermail FROM users WHERE userid = (?)");
        prepareToLoad.setInt(1, id);
        ResultSet loadedInf = prepareToLoad.executeQuery();

        ArrayList<Object> gotInf = new ArrayList<>();

        while (loadedInf.next()) {
            gotInf.add(loadedInf.getString(1));
            gotInf.add(loadedInf.getString(2));
            gotInf.add(loadedInf.getString(3));
            gotInf.add(loadedInf.getInt(4));
            gotInf.add(loadedInf.getString(5));
            gotInf.add(loadedInf.getString(6));
            gotInf.add(loadedInf.getInt(7));
            gotInf.add(loadedInf.getString(8));
        }

        LOGGER.info("ResultSet read to Array");

        return gotInf;
    }
}
