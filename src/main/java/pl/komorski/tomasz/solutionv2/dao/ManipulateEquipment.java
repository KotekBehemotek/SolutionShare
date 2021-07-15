package pl.komorski.tomasz.solutionv2.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Logger;

public class ManipulateEquipment {
    private static final Logger LOGGER = Logger.getLogger(ManipulateEquipment.class.getName());

    private DataBaseUtilitySearch dataBaseUtilitySearch = new DataBaseUtilitySearch();

    public boolean initEquipment(String email, String nickname, Connection connTSU) throws SQLException {
        LOGGER.info("began initEquipment()");

        PreparedStatement prepareToSave = connTSU.prepareStatement("INSERT INTO usersEquipment (eqID, nickname, turnOffTheLights, userSentence, language, accountStyle) VALUES (?, ?, ?, ?, ?, ?);");
        prepareToSave.setInt(1, dataBaseUtilitySearch.searchForIDByEmail(email, connTSU));
        prepareToSave.setString(2, nickname);
        prepareToSave.setBoolean(3, false);
        prepareToSave.setString(4, "");
        prepareToSave.setString(5, "en");
        prepareToSave.setInt(6, 1);

        int counterSave = prepareToSave.executeUpdate();

        LOGGER.info("equipment was inited");

        return counterSave > 0;
    }

    public ArrayList<Object> findAndGetEquipment(String email, Connection connTSU) throws SQLException {
        LOGGER.info("began findAndGetEquipment()");

        PreparedStatement prepareToFind = connTSU.prepareStatement("SELECT * FROM usersEquipment WHERE (eqID) = (?);");
        prepareToFind.setInt(1, dataBaseUtilitySearch.searchForIDByEmail(email, connTSU));
        ResultSet foundEquipment = prepareToFind.executeQuery();

        LOGGER.info("equipment got, reading ResultSet");

        ArrayList<Object> gotEquipment = new ArrayList<>();

        while (foundEquipment.next()) {
            gotEquipment.add(foundEquipment.getInt(1));
            gotEquipment.add(foundEquipment.getString(2));
            gotEquipment.add(foundEquipment.getBoolean(3));
            gotEquipment.add(foundEquipment.getString(4));
            gotEquipment.add(foundEquipment.getString(5));
            gotEquipment.add(foundEquipment.getInt(6));
        }

        LOGGER.info("ResultSet read to Array");

        return gotEquipment;
    }

    public boolean addCredoToEquipment(int id, String credo, Connection connTSU) throws SQLException {
        LOGGER.info("began addCredoToEquipment()");
        System.out.println(credo + "ok");

        PreparedStatement prepareToAdd = connTSU.prepareStatement("UPDATE usersEquipment SET usersentence = ? WHERE eqid = ?");
        prepareToAdd.setString(1, credo);
        prepareToAdd.setInt(2, id);

        int counterSave = prepareToAdd.executeUpdate();

        return counterSave > 0;
    }

    public boolean addInterestsToEquipment(int id, String interest1, String interest2, String interest3, Connection connTSU) throws SQLException {
        LOGGER.info("began addInterestsToEquipment()");

        PreparedStatement prepareToAdd = connTSU.prepareStatement("UPDATE usersequipment SET interest1 = ?, interest2 = ?, interest3 = ? WHERE eqid = ?");
        prepareToAdd.setString(1, interest1);
        prepareToAdd.setString(2, interest2);
        prepareToAdd.setString(3, interest3);
        prepareToAdd.setInt(4, id);

        int counterSave = prepareToAdd.executeUpdate();

        return counterSave > 0;
    }

    public String[] loadInfFromEquipment(int id, Connection connTSU) throws SQLException {
        LOGGER.info("began loadInfFromEquipment()");

        PreparedStatement prepareToLoad = connTSU.prepareStatement("SELECT usersentence, interest1, interest2, interest3 FROM usersequipment WHERE eqid = (?)");
        prepareToLoad.setInt(1, id);
        ResultSet foundInf = prepareToLoad.executeQuery();

        String[] infTable = new String[4];

        while (foundInf.next()) {
            infTable[0] = foundInf.getString(1);
            infTable[1] = foundInf.getString(2);
            infTable[2] = foundInf.getString(3);
            infTable[3] = foundInf.getString(4);
        }
        return infTable;
    }
}
