package pl.komorski.tomasz.solutionv2.service;

import org.apache.commons.lang3.StringUtils;

import java.util.logging.Logger;

public class RegularVerify {
    private static final Logger LOGGER = Logger.getLogger(RegularVerify.class.getName());

    public static final String nicknameRegex = "\\S{3,30}";
    public static final String emailRegex = "[a-z0-9\\.\\_\\-]{3,}@[a-z0-9\\-]{2,}\\.[a-z]{2,4}";
    public static final String password1Regex1 = ".{6,30}";
    public static final String password1Regex2 = "\\w*[0-9]+\\w*";

    public boolean verifySingIn(String toBeVerified, String toVerify, String toVerify2) {
        LOGGER.info("began verifySignIn()");

        return toBeVerified != null && toBeVerified.matches(toVerify) && toBeVerified.matches(toVerify2);
    }

    public boolean verifyLength(String toBeVerified, int howShort, int howLong) {
        LOGGER.info("began verifyLength()");

        return toBeVerified.length() > howShort && toBeVerified.length() < howLong;
    }

    public boolean verifyNumeric(String toBeVerified) {
        LOGGER.info("began verifyNumeric()");

        return StringUtils.isNumericSpace(toBeVerified);
    }
}
