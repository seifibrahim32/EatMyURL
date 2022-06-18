import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';

import '../Components/colors.dart';

Widget mobileView(Size size)
  =>
      Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Center(
              child: SizedBox(
                child: Lottie.asset(
                  "assets/images/crunch.json",
                  width: size.width * 0.9,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: SizedBox(
                width: 400,
                height: 100,
                child: Text(
                  'Shorten your essential links\nMobile Version',
                  textAlign: TextAlign.center,
                  style: GoogleFonts.nunito(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                    color: mattext,
                  ),
                ),
              ),
            ),
          ],
        ),
      );