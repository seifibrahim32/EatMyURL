import 'package:flip_card/flip_card_controller.dart';
import 'package:flutter/material.dart';

import '../views/homescr_desktop.dart';
import '../views/homescr_mobile.dart';

class HomeScreen extends StatefulWidget {

  final bool isDesktop;
  const HomeScreen({Key? key, required this.isDesktop}) : super(key: key);

  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {

  FlipCardController _controller = FlipCardController();

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    return widget.isDesktop? homeScreenDesktop(size,_controller): homeScreenMobile(size,_controller);
    }
}
