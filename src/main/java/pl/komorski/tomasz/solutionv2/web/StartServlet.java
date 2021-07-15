package pl.komorski.tomasz.solutionv2.web;

import pl.komorski.tomasz.solutionv2.service.DataBaseConnector;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

@WebServlet(name = "StartServlet", urlPatterns = "/start")
public class StartServlet extends HttpServlet {
    private static final Logger LOGGER = Logger.getLogger(DataBaseConnector.class.getName());

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("begin doGet()");

        getServletContext().getRequestDispatcher("/WEB-INF/pages/jsp/Start.jsp").forward(request, response);
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        LOGGER.info("begin doPost()");
    }
}
