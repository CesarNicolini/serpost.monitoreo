using System;
using System.Collections.Generic;
using System.Text;

namespace serpost.monitoreo.core.DTOs
{
    public class UserSignIn
    {
        public string username { get; set; }
        public string token { get; set; }
        public List<string> roles { get; set; }
    }
}
