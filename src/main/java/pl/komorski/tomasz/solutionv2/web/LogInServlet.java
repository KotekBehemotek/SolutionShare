package pl.komorski.tomasz.solutionv2.web;

import pl.komorski.tomasz.solutionv2.service.DataBaseOperator;
import pl.komorski.tomasz.solutionv2.service.RegularVerify;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Logger;

@WebServlet(name = "LogInServlet", urlPatterns = "/logIn", asyncSupported = true)
public class LogInServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(LogInServlet.class.getName());

    public LogInServlet() throws SQLException {
    }

    private RegularVerify regularVerify = new RegularVerify();
    private DataBaseOperator dataBaseOperator = new DataBaseOperator();

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("began doGet()");

        getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/LogIn.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("began doPost()");

        String email = request.getParameter("email");
        String password = request.getParameter("password1");

        if (regularVerify.verifySingIn(email, RegularVerify.emailRegex, RegularVerify.emailRegex)
                && regularVerify.verifySingIn(password, RegularVerify.password1Regex1, RegularVerify.password1Regex2)) {
            LOGGER.info("input data passed initial verification");

            try {
                if (dataBaseOperator.operateVerifyingUser(email, password)) {
                    ArrayList<Object> informationForSession = dataBaseOperator.operateLoadingUser(email);

                    HttpSession userSession = request.getSession();
                    userSession.setAttribute("isLogged", true);
                    userSession.setAttribute("ID", informationForSession.get(0));
                    userSession.setAttribute("nick", informationForSession.get(1));
                    userSession.setAttribute("bio", informationForSession.get(3));

                    getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/Start.jsp").forward(request, response);
                } else {
                    getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/LogIn.jsp").forward(request, response);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } else {
            getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/LogIn.jsp").forward(request, response);
        }
    }
}
