package pl.komorski.tomasz.solutionv2.web;

import pl.komorski.tomasz.solutionv2.service.DataBaseConnector;
import pl.komorski.tomasz.solutionv2.service.DataBaseOperator;
import pl.komorski.tomasz.solutionv2.service.RegularVerify;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.logging.Logger;

@WebServlet(name = "SignInServlet", urlPatterns = "/signIn")
public class SignInServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    public SignInServlet() throws SQLException {
    }

    private RegularVerify regularVerify = new RegularVerify();
    private DataBaseOperator dataBaseOperator = new DataBaseOperator();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("begin doGet()");

        getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/SignIn.jsp").forward(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("begin doPost()");

        String nickname = request.getParameter("nickname");
        String email = request.getParameter("email");
        String password1 = request.getParameter("password1");
        String password2 = request.getParameter("password2");

        if (regularVerify.verifySingIn(nickname, RegularVerify.nicknameRegex, RegularVerify.nicknameRegex)
                && regularVerify.verifySingIn(email, RegularVerify.emailRegex, RegularVerify.emailRegex)
                && regularVerify.verifySingIn(password1, RegularVerify.password1Regex1, RegularVerify.password1Regex2)
                && regularVerify.verifySingIn(password2, password1, password1)) {

            try {
                if (dataBaseOperator.operateAddingNewUser(nickname, email, password1).equals("Everything OK")) {
                    getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/LogIn.jsp").forward(request, response);
                } else if (dataBaseOperator.operateAddingNewUser(nickname, email, password1).equals("Email reserved")) {
                    request.setAttribute("emailReserved", true);
                    getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/SignIn.jsp").forward(request, response);
                } else {
                    request.setAttribute("ERROR", true);
                    getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/SignIn.jsp").forward(request, response);
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        } else {
            request.setAttribute("userRegistered", false);
            getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/SignIn.jsp").forward(request, response);
        }

    }

}
