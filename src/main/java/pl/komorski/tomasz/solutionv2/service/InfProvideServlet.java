package pl.komorski.tomasz.solutionv2.service;

import pl.komorski.tomasz.solutionv2.dao.ManipulateUser;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.logging.Logger;

@WebServlet(name = "InfProvideServlet", urlPatterns = "/infprovide")
public class InfProvideServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(InfProvideServlet.class.getName());

    DataBaseOperator dataBaseOperator = new DataBaseOperator();

    public InfProvideServlet() throws SQLException {
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("began doGet()");

        int id = (int) request.getSession().getAttribute("ID");
        String requester = (String) request.getAttribute("requester");

        try {
            ArrayList<Object> loadedInf = dataBaseOperator.operateLoadingInf(id);

            request.setAttribute("credo", loadedInf.get(0));
            request.setAttribute("interest1", loadedInf.get(1));
            request.setAttribute("interest2", loadedInf.get(2));
            request.setAttribute("interest3", loadedInf.get(3));
            request.setAttribute("name1", loadedInf.get(4));
            request.setAttribute("name2", loadedInf.get(5));
            request.setAttribute("surname", loadedInf.get(6));

            if (loadedInf.get(7) == Integer.valueOf(0)) {
                request.setAttribute("year", "");
            } else {
                request.setAttribute("year", loadedInf.get(7));
            }

            request.setAttribute("city", loadedInf.get(8));
            request.setAttribute("country", loadedInf.get(9));

            if (loadedInf.get(10) == Integer.valueOf(0)) {
                request.setAttribute("number", "");
            } else {
                request.setAttribute("number", loadedInf.get(10));
            }

            request.setAttribute("email", loadedInf.get(11));

            LOGGER.info("saved info to request");
        } catch (SQLException e) {
            e.printStackTrace();
        }
        getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/" + requester + ".jsp").forward(request, response);
    }
}
