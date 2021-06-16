package pl.komorski.tomasz.solutionv2.service;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.sql.SQLException;
import java.util.logging.Logger;

@WebServlet(name = "PictureProvideServlet", urlPatterns = "/pictureProvide/*", asyncSupported = true)
public class PictureProvideServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(PictureProvideServlet.class.getName());

    DataBaseOperator dataBaseOperator = new DataBaseOperator();

    public PictureProvideServlet() throws SQLException {
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("begin doPost()");

        int id = (Integer) request.getSession().getAttribute("ID");
        String pictureType = request.getParameter("pictureType");

        try {
            if (pictureType.equals("profile")) {
                if (dataBaseOperator.operateCheckingProfilePicture(id)) {
                    try {

                        byte[] pictureBytes = dataBaseOperator.operateLoadingProfilePicture(id);

                        response.setContentType("image/jpeg");
                        response.setContentLength(pictureBytes.length);
                        response.getOutputStream().write(pictureBytes);

                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            } else if (pictureType.equals("profileask")) {
                    response.setContentType("String");
                    response.getWriter().write(String.valueOf(dataBaseOperator.operateCheckingProfilePicture(id)));

            } else if (pictureType.equals("background")) {
                if (dataBaseOperator.operateCheckingBackgroundPicture(id)) {
                    try {

                        byte[] pictureBytes = dataBaseOperator.operateLoadingBackgroundPicture(id);

                        response.setContentType("image/jpeg");
                        response.setContentLength(pictureBytes.length);
                        response.getOutputStream().write(pictureBytes);

                    } catch (SQLException e) {
                        e.printStackTrace();
                    }
                }
            } else if (pictureType.equals("backgroundask")) {
                response.setContentType("String");
                response.getWriter().write(String.valueOf(dataBaseOperator.operateCheckingBackgroundPicture(id)));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
