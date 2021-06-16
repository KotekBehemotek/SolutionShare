package pl.komorski.tomasz.solutionv2.service;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import java.io.IOException;
import java.io.InputStream;
import java.sql.SQLException;
import java.util.logging.Logger;

@WebServlet("/savePictureServlet")
@MultipartConfig()
public class SavePictureServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(SavePictureServlet.class.getName());

    public SavePictureServlet() throws SQLException {
    }

    private DataBaseOperator dataBaseOperator = new DataBaseOperator();

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("began doPost()");

        String pictureTypeBP = request.getHeader("pictureType");
        Part filePart = request.getPart("picture");

        if (filePart.getContentType().equals("image/jpeg") || filePart.getContentType().equals("image/png")) {
            String pictureType = filePart.getContentType();
            System.out.println(pictureType);
            InputStream pictureStream = filePart.getInputStream();

            if (pictureTypeBP.equals("profile")) {
                try {
                    LOGGER.info("asking java class to save profile picture");

                    dataBaseOperator.operateSavingProfilePicture((Integer) request.getSession().getAttribute("ID"), pictureStream, pictureType);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            } else if (pictureTypeBP.equals("background")) {
                try {
                    LOGGER.info("asking java class to save background picture");

                    dataBaseOperator.operateSavingBackgroundPicture((Integer) request.getSession().getAttribute("ID"), pictureStream, pictureType);
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}
