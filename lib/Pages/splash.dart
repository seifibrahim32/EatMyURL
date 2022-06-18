import 'package:flutter/material.dart';

import '../views/desktopview.dart';
import '../views/mobileview.dart';
import 'home_screen.dart';

class Splash extends StatefulWidget {

  final bool isDesktop;
  Splash({required this.isDesktop});
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {

  @override
  void initState() {
    print(widget.isDesktop);
    super.initState();
    Future.delayed(Duration(seconds: 4), () {
      Navigator.pushReplacement(
          context, MaterialPageRoute(
          builder:
              (context)
          =>
              HomeScreen(isDesktop:widget.isDesktop)));
    });
  }

  @override
  Widget build(BuildContext context) {
    var size = MediaQuery.of(context).size;
    //print(size.width + size.height);
    return widget.isDesktop?
    desktopView(size):mobileView(size);
  }
}
