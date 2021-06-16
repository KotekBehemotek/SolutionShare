package pl.komorski.tomasz.solutionv2.service;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;

@WebServlet(name = "AntiIGServlet", urlPatterns = "/antiIG")
public class AntiIGServlet extends HttpServlet {

    DataBaseOperator dataBaseOperator = new DataBaseOperator();

    public AntiIGServlet() throws SQLException {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int id = (Integer) request.getSession().getAttribute("ID");
        String pictureType = request.getHeader("pictureType");

        if (pictureType.equals("profile")) {
            try {
                if (!dataBaseOperator.operateDeletingProfilePicture(id)) {
                    response.getWriter().write("dberr");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } else if (pictureType.equals("background")) {
            try {
                if (!dataBaseOperator.operateDeletingBackgroundPicture(id)) {
                    response.getWriter().write("dberr");
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
