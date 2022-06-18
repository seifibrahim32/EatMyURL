
import 'package:flip_card/flip_card.dart';
import 'package:flip_card/flip_card_controller.dart';
import 'package:flutter/material.dart';

import '../Components/click_count.dart';
import '../Components/colors.dart';
import '../Components/shorten_card.dart';

Widget homeScreenDesktop(Size size,FlipCardController _controller)
  =>  Scaffold(
    backgroundColor: background,
    body: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 15),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Padding(
            padding:
            const EdgeInsets.symmetric(vertical: 20, horizontal: 20),
            child: SizedBox(
              height: size.height * .2,
              child: Image.asset('assets/images/logo.png'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 5),
            child: Center(
              child: SizedBox(
                width: size.width * .9,
                child: FlipCard(
                  controller: _controller,
                  fill: Fill
                      .fillBack, // Fill the back side of the card to make in the same size as the front.
                  direction: FlipDirection.HORIZONTAL, // default
                  front: Container(
                    decoration: BoxDecoration(
                      color: matpinkcard,
                      borderRadius: BorderRadius.circular(20),
                    ),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 10),
                      child: ShortenURL(),
                    ),
                  ),
                  back: SizedBox(
                    child: Container(
                      decoration: BoxDecoration(
                        color: matpinkcard,
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: CountClicks(),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    ),
  );