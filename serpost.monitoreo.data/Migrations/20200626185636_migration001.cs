using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace serpost.monitoreo.data.Migrations
{
    public partial class migration001 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "camara",
                columns: table => new
                {
                    id_camara = table.Column<short>(type: "smallint", nullable: false),
                    url_camara = table.Column<string>(type: "varchar(30)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_camara", x => x.id_camara);
                });

            migrationBuilder.CreateTable(
                name: "usuario",
                columns: table => new
                {
                    username = table.Column<string>(type: "varchar(30)", nullable: false),
                    password = table.Column<string>(type: "varchar(500)", nullable: false),
                    ap_paterno = table.Column<string>(type: "varchar(50)", nullable: false),
                    ap_materno = table.Column<string>(type: "varchar(50)", nullable: false),
                    nombres = table.Column<string[]>(type: "varchar(50)[]", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_usuario", x => x.username);
                });

            migrationBuilder.CreateTable(
                name: "archivos",
                columns: table => new
                {
                    id_archivo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    id_camara = table.Column<short>(type: "smallint", nullable: false),
                    nombre_archivo = table.Column<string>(type: "varchar(50)", nullable: false),
                    fecha_inicio = table.Column<DateTime>(type: "timestamp", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_archivos", x => new { x.id_camara, x.id_archivo });
                    table.ForeignKey(
                        name: "FK_archivos_camara_id_camara",
                        column: x => x.id_camara,
                        principalTable: "camara",
                        principalColumn: "id_camara",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ti_usuario_x_camara",
                columns: table => new
                {
                    username = table.Column<string>(type: "varchar(30)", nullable: false),
                    id_camara = table.Column<short>(type: "smallint", nullable: false),
                    activo = table.Column<bool>(type: "BOOLEAN", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ti_usuario_x_camara", x => new { x.id_camara, x.username });
                    table.ForeignKey(
                        name: "FK_ti_usuario_x_camara_camara_id_camara",
                        column: x => x.id_camara,
                        principalTable: "camara",
                        principalColumn: "id_camara",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ti_usuario_x_camara_usuario_username",
                        column: x => x.username,
                        principalTable: "usuario",
                        principalColumn: "username",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "camara",
                columns: new[] { "id_camara", "url_camara" },
                values: new object[,]
                {
                    { (short)1, "http://10.147.17.111:3333/" },
                    { (short)2, "http://10.147.17.99:8080/" },
                    { (short)3, "http://10.147.17.20:8080/" }
                });

            migrationBuilder.InsertData(
                table: "usuario",
                columns: new[] { "username", "ap_materno", "ap_paterno", "nombres", "password" },
                values: new object[,]
                {
                    { "CNICOLINI", "RIVERO", "NICOLINI", new[] { "CÉSAR", "GIANFRANCO" }, "123456" },
                    { "ACHAVARRI", "FREIRE", "CHAVARRI", new[] { "ALVARO", "ALONSO" }, "123456" }
                });

            migrationBuilder.InsertData(
                table: "ti_usuario_x_camara",
                columns: new[] { "id_camara", "username", "activo" },
                values: new object[,]
                {
                    { (short)1, "CNICOLINI", true },
                    { (short)2, "CNICOLINI", true },
                    { (short)3, "CNICOLINI", true },
                    { (short)1, "ACHAVARRI", true }
                });

            migrationBuilder.CreateIndex(
                name: "IX_ti_usuario_x_camara_username",
                table: "ti_usuario_x_camara",
                column: "username");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "archivos");

            migrationBuilder.DropTable(
                name: "ti_usuario_x_camara");

            migrationBuilder.DropTable(
                name: "camara");

            migrationBuilder.DropTable(
                name: "usuario");
        }
    }
}
