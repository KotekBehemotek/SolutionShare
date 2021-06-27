package pl.komorski.tomasz.solutionv2.dao;

import pl.komorski.tomasz.solutionv2.service.DataBaseConnector;

import java.io.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Logger;

public class ManipulatePictures {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    //zamienic na przekazywanie wartości przez konstruktor
    //wstrzykiwanie zależności dla zmiennej przez konstruktor
    private DataBaseUtilitySearch dataBaseUtilitySearch = new DataBaseUtilitySearch();

    public void initProfilePicture(String email, Connection connTSU) throws SQLException {
        LOGGER.info("begin initProfilePicture()");

        PreparedStatement prepareToInit = connTSU.prepareStatement("INSERT INTO usersaccountspictures (picturesid) VALUES (?)");
        prepareToInit.setInt(1, dataBaseUtilitySearch.searchForIDByEmail(email, connTSU));
        prepareToInit.executeUpdate();
    }

    public void saveProfilePicture(int id, InputStream pictureStream, String pictureType, Connection connTSU) throws SQLException, IOException {
        LOGGER.info("begin saveProfilePicture()");

        PreparedStatement prepareToSave = connTSU.prepareStatement("UPDATE usersaccountspictures SET profilepicture = (?), profilepicturetype = (?) WHERE picturesid = (?)");
        prepareToSave.setBytes(1, pictureStream.readAllBytes());
        prepareToSave.setString(2, pictureType);
        prepareToSave.setInt(3, id);
        prepareToSave.executeUpdate();
    }

    public byte[] loadProfilePicture(int id, Connection connTSU) throws SQLException, IOException {
        LOGGER.info("begin loadProfilePicture()");

        PreparedStatement prepareToLoad = connTSU.prepareStatement("SELECT profilepicture FROM usersaccountspictures WHERE picturesid = (?)");
        prepareToLoad.setInt(1, id);
        ResultSet loadedPicture = prepareToLoad.executeQuery();

        LOGGER.info("ProfilePicture was loaded");

        loadedPicture.next();

        return loadedPicture.getBytes(1);
    }

    public boolean checkForProfilePicture(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began checkForProfilePicture()");

        PreparedStatement prepareToCheck = connTSU.prepareStatement("SELECT profilepicture FROM usersaccountspictures WHERE picturesid = (?)");
        prepareToCheck.setInt(1, id);
        ResultSet checkedPicture = prepareToCheck.executeQuery();

        checkedPicture.next();

        return checkedPicture.getBytes(1) != null;
    }

    public boolean deleteProfilePicture(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began deleteProfilePicture()");

        PreparedStatement prepareToDelete = connTSU.prepareStatement("UPDATE usersaccountspictures SET profilepicture = NULL, profilepicturesmall = NULL, profilepicturetype = NULL WHERE picturesid = (?)");
        prepareToDelete.setInt(1, id);
        prepareToDelete.executeUpdate();

        return !checkForProfilePicture(id, connTSU);
    }

    public void saveBackgroundPicture(int id, InputStream pictureStream, String pictureType, Connection connTSU) throws SQLException, IOException {
        LOGGER.info("began saveBackgroundPicture()");

        PreparedStatement prepareToSave = connTSU.prepareStatement("UPDATE usersaccountspictures SET backgroundpicture = (?), backgroundpicturetype = (?) WHERE picturesid = (?)");
        prepareToSave.setBytes(1, pictureStream.readAllBytes());
        prepareToSave.setString(2, pictureType);
        prepareToSave.setInt(3, id);
        prepareToSave.executeUpdate();
    }

    public byte[] loadBackgroundPicture(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began loadBackgroundPicture()");

        PreparedStatement prepareToLoad = connTSU.prepareStatement("SELECT backgroundpicture FROM usersaccountspictures WHERE picturesid = (?)");
        prepareToLoad.setInt(1, id);
        ResultSet loadedPicture = prepareToLoad.executeQuery();

        LOGGER.info("background picture was loaded");

        loadedPicture.next();

        return loadedPicture.getBytes(1);
    }

    public boolean checkForBackgroundPicture(int id, Connection connTSU) throws SQLException {
        LOGGER.info("begin checkForProfilePicture()");

        PreparedStatement prepareToCheck = connTSU.prepareStatement("SELECT backgroundpicture FROM usersaccountspictures WHERE picturesid = (?)");
        prepareToCheck.setInt(1, id);
        ResultSet checkedPicture = prepareToCheck.executeQuery();

        checkedPicture.next();

        return checkedPicture.getBytes(1) != null;
    }

    public boolean deleteBackgroundPicture(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began deleteBackgroundPicture()");

        PreparedStatement prepareToDelete = connTSU.prepareStatement("UPDATE usersaccountspictures SET backgroundpicture = NULL, backgroundpicturesmall = NULL, backgroundpicturetype = NULL WHERE picturesid = (?)");
        prepareToDelete.setInt(1, id);
        prepareToDelete.executeUpdate();

        return !checkForBackgroundPicture(id, connTSU);
    }
}