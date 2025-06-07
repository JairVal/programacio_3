// Rutas que podrían necesitar autenticación
@UseGuards(JwtAuthGuard)
@Post('carteras') // Crear nueva cartera
crearCartera(@Body() createCarteraDto: CreateCarteraDto, @Request() req) {
  // Solo usuarios autenticados pueden crear carteras
  return this.carterasService.crear(createCarteraDto, req.user.id);
}

@UseGuards(JwtAuthGuard)
@Get('mis-carteras') // Ver carteras del usuario
getMisCarteras(@Request() req) {
  return this.carterasService.findByUser(req.user.id);
}