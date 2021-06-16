package pl.komorski.tomasz.solutionv2.service;

import pl.komorski.tomasz.solutionv2.web.ManageAccountInfServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Logger;

@WebServlet(name = "SaveInfServlet", urlPatterns = "/saveInf", asyncSupported = false)
@MultipartConfig()
public class SaveInfServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(SaveInfServlet.class.getName());

    RegularVerify regularVerify = new RegularVerify();
    DataBaseOperator dataBaseOperator = new DataBaseOperator();

    public SaveInfServlet() throws SQLException {
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("began doPost()");

        int id = (int) request.getSession().getAttribute("ID");
        String header = request.getHeader("form");

        String[][] parameterNames = {{"credo"}, {"interest1", "interest2", "interest3"}, {"name1", "name2", "surname"}, {"year", "city", "country"}, {"number", "email"}};
        String[][] parameterValues = {{""}, {"", "", ""}, {"", "", ""}, {"0", "", ""}, {"0", ""}};

        short i = 0;
        if (header.equals("formInterests")) {
            i = 1;
        } else if (header.equals("formNames")) {
            i = 2;
        } else if (header.equals("formGeneral")) {
            i = 3;
        } else if (header.equals("formContact")) {
            i = 4;
        }

        for (short j = 0; j < parameterNames[i].length; j++) {
            int c;

            if (i == 0) {
                c = 101;
            } else if (i == 4 && j == 0) {
                c = 16;
                if (request.getParameter(parameterNames[i][j]) != null && !regularVerify.verifyNumeric(request.getParameter(parameterNames[i][j]))) {
                    parameterValues[i][j] = "0";
                }
            } else if (i == 4 && j == 1) {
                c = 256;
            } else if (i == 3 && j == 0) {
                c = 5;
                if (request.getParameter(parameterNames[i][j]) != null && !regularVerify.verifyNumeric(request.getParameter(parameterNames[i][j]))) {
                    parameterValues[i][j] = "0";
                }
            } else if (i == 3 && j == 1) {
                c = 51;
            } else {
                c = 31;
            }
            if (request.getParameter(parameterNames[i][j]) != null && regularVerify.verifyLength(request.getParameter(parameterNames[i][j]), 1, c)) {
                parameterValues[i][j] = request.getParameter(parameterNames[i][j]);
            }
        }

        try {
            if (dataBaseOperator.operateAddingInf(header, id, parameterValues[0][0], parameterValues[1][0], parameterValues[1][1], parameterValues[1][2], parameterValues[2][0], parameterValues[2][1], parameterValues[2][2], parameterValues[3][0], parameterValues[3][1], parameterValues[3][2], parameterValues[4][0], parameterValues[4][1])) {
                request.setAttribute("infsaved", true);
            } else {
                request.setAttribute("infsaved", false);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
