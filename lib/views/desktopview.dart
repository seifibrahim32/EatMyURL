
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:lottie/lottie.dart';

import '../Components/colors.dart';

Widget desktopView(Size size)
  =>
      Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: [
            Center(
              child: Lottie.asset(
                "assets/images/crunch.json",
                width: size.width / 1.9,
                      height: size.height / 1.7
              ),
            ),
            Text(
              'Shorten your essential links\nDesktop Version',
              textAlign: TextAlign.center,
              style: GoogleFonts.nunito(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: mattext,
              ),
            ),
          ],
        ),
      );