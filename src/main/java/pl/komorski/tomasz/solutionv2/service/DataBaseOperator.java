package pl.komorski.tomasz.solutionv2.service;

import pl.komorski.tomasz.solutionv2.dao.*;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Logger;

public class DataBaseOperator {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    public DataBaseOperator() throws SQLException {
    }

    private DataBaseConnector dataBaseConnector = new DataBaseConnector();
    private DataBaseUtilitySearch dataBaseUtilitySearch = new DataBaseUtilitySearch();
    private ManipulateUser manipulateUser = new ManipulateUser();
    private ManipulateEquipment manipulateEquipment = new ManipulateEquipment();
    private ManipulatePictures manipulatePictures = new ManipulatePictures();

    Connection connTSU = dataBaseConnector.connectToSolutionUsers();

    public String operateAddingNewUser(String nickname, String email, String password) throws SQLException {
        LOGGER.info("begin operateAddingNewUser()");

        if (manipulateUser.searchForUserByEmail(email, connTSU)) {
            if (manipulateUser.saveUser(email, password, connTSU)) {
                if (dataBaseUtilitySearch.searchForIDByEmail(email, connTSU) > 0) {
                    if (manipulateEquipment.initEquipment(email, nickname, connTSU)) {
                        manipulatePictures.initProfilePicture(email, connTSU);

                        LOGGER.info("user was added");
                        return "Everything OK";
                    } else {
                        LOGGER.info("Error during saving equipment");
                        return "Error during saving equipment";
                    }
                } else {
                    LOGGER.info("Error during looking for ID matching email");
                    return "Error during looking for ID matching email";
                }
            } else {
                if (manipulateUser.removeUser(email, connTSU)) {
                    LOGGER.info("Error in between. Removed everything");
                    return "Error in between. Removed everything";
                } else {
                    LOGGER.info("Critical error during removing triggered by another error");
                    return "Critical error during removing triggered by another error";
                }
            }
        } else {
            LOGGER.info("Email reserved");
            return "Email reserved";
        }
    }

    public Boolean operateVerifyingUser(String email, String password) throws SQLException {
        LOGGER.info("begin operateVerifyingUser()");

        if (!dataBaseUtilitySearch.searchForPasswordByEmail(email, connTSU).equals("nope")) {
            LOGGER.info("user verified positive");

            return dataBaseUtilitySearch.searchForPasswordByEmail(email, connTSU).equals(password);
        } else {
            LOGGER.info("user verified negative");

            return false;
        }
    }

    public ArrayList<Object> operateLoadingUser(String email) throws SQLException {
        LOGGER.info("began operateLoadingUser()");

        return manipulateEquipment.findAndGetEquipment(email, connTSU);
    }

    public void operateSavingProfilePicture(int id, InputStream picture, String pictureType) throws SQLException, IOException {
        LOGGER.info("begin operateSavingProfilePicture()");

        manipulatePictures.saveProfilePicture(id, picture, pictureType, connTSU);
    }

    public byte[] operateLoadingProfilePicture(int id) throws SQLException, IOException {
        LOGGER.info("begin operateLoadingProfilePicture()");

        return manipulatePictures.loadProfilePicture(id, connTSU);
    }

    public boolean operateCheckingProfilePicture(int id) throws SQLException {
        LOGGER.info("began operateCheckingProfilePicture()");

        return manipulatePictures.checkForProfilePicture(id, connTSU);
    }

    public boolean operateDeletingProfilePicture(int id) throws SQLException {
        LOGGER.info("began operateDeletingProfilePicture()");

        return manipulatePictures.deleteProfilePicture(id, connTSU);
    }

    public void operateSavingBackgroundPicture(int id, InputStream picture, String pictureType) throws SQLException, IOException {
        LOGGER.info("began operateSavingBackgroundPicture()");

        manipulatePictures.saveBackgroundPicture(id, picture, pictureType, connTSU);
    }

    public byte[] operateLoadingBackgroundPicture(int id) throws SQLException, IOException {
        LOGGER.info("began operateLoadingBackgroundPicture()");

        return manipulatePictures.loadBackgroundPicture(id, connTSU);
    }

    public boolean operateCheckingBackgroundPicture(int id) throws SQLException {
        LOGGER.info("began operateCheckingBackgroundPicture()");

        return manipulatePictures.checkForBackgroundPicture(id, connTSU);
    }

    public boolean operateDeletingBackgroundPicture(int id) throws SQLException {
        LOGGER.info("began operateDeletingBackgroundPicture()");

        return manipulatePictures.deleteBackgroundPicture(id, connTSU);
    }

    public boolean operateAddingInf(String which, int id, String credo, String interest1, String interest2, String interest3, String name1, String name2, String surname, String year, String city, String country, String number, String otherMail) throws SQLException {
        LOGGER.info("began operateAddingInf()");

        int yearInt = Integer.parseInt(year);
        int numberInt = Integer.parseInt(number);

        if (which.equals("formCredo")) {
            return manipulateEquipment.addCredoToEquipment(id, credo, connTSU);
        } else if (which.equals("formInterests")) {
            return manipulateEquipment.addInterestsToEquipment(id, interest1, interest2, interest3, connTSU);
        } else if (which.equals("formNames")) {
            return manipulateUser.addNamesToUser(id, name1, name2, surname, connTSU);
        } else if (which.equals("formGeneral")) {
            return manipulateUser.addGeneralToUser(id, yearInt, city, country, connTSU);
        } else {
            return manipulateUser.addContactToUser(id, numberInt, otherMail, connTSU);
        }
    }

    public ArrayList<Object> operateLoadingInf(int id) throws SQLException {
        LOGGER.info("began operateLoadInf()");

        ArrayList<Object> completeInf = new ArrayList<>();

        String[] eqInf = manipulateEquipment.loadInfFromEquipment(id, connTSU);
        ArrayList<Object> userInf = manipulateUser.loadInfFromUser(id, connTSU);
        completeInf.add(eqInf[0]);
        completeInf.add(eqInf[1]);
        completeInf.add(eqInf[2]);
        completeInf.add(eqInf[3]);
        completeInf.addAll(userInf);

        return completeInf;
    }
}
