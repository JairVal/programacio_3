// Ejemplo de uso en controladores
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
@Delete('carteras/:id')
eliminarCartera(@Param('id') id: string) {
  // Solo admins pueden eliminar carteras
}

@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin', 'moderador')
@Put('carteras/:id/aprobar')
aprobarCartera(@Param('id') id: string) {
  // Admins y moderadores pueden aprobar carteras
}

@UseGuards(JwtAuthGuard)
@Post('carteras')
crearCartera(@Body() createCarteraDto: CreateCarteraDto) {
  // Cualquier usuario autenticado puede crear carteras
}
